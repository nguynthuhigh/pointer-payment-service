import { CreateOrderDto } from "../dtos/payment.dto";
import { NotFound } from "../helpers/error.helper";
import Redis from "../helpers/redis.helper";
import { v4 as uuidv4 } from "uuid";
import Transaction from "../models/transaction.model";
import { Currency } from "../models/currency.model";
export default class PaymentService {
  static async createOrder(createOrderDto: CreateOrderDto): Promise<string> {
    console.log(createOrderDto);
    const { partner, currency } = createOrderDto;
    console.log(currency);
    const foundCurrency = await Currency.findOne({ symbol: currency });
    console.log(foundCurrency);
    if (!foundCurrency) {
      throw new NotFound("Currency not found");
    }
    const createdTransaction = await Transaction.create({
      ...createOrderDto,
      currency: foundCurrency._id,
      type: "payment",
      title: "Thanh toán hóa đơn " + partner.name,
      partnerID: partner._id,
    });
    await Redis.set(
      createdTransaction._id.toString(),
      JSON.stringify(createOrderDto.orders),
      600
    );
    return (
      process.env.PAYMENT_HOST +
      "payment-gateway?token=" +
      createdTransaction._id
    );
  }
  static async getOrder(transactionID: string) {
    const orders: any = await Redis.get(transactionID);
    const transaction = await Transaction.findById(transactionID)
      .populate({ path: "partnerID", select: "name image description" })
      .populate({ path: "currency" })
      .lean()
      .exec();
    if (!transaction || transaction.status === "completed" || !orders) {
      throw new NotFound("Transaction not found!");
    }
    return { ...transaction, orders: JSON.parse(orders) };
  }
  static async cancelOrder(transactionID: string) {
    const delOrder = await Redis.del(transactionID);
    if (delOrder !== 1) {
      throw new NotFound();
    }
    return delOrder;
  }
}
