import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["transfer", "payment", "deposit", "withdraw"],
      index: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "completed", "fail", "refund"],
      default: "pending",
    },
    currency: {
      type: Schema.Types.ObjectId,
      ref: "Currency",
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
      index: true,
    },
    partnerID: {
      type: Schema.Types.ObjectId,
      ref: "Partner",
      required: false,
    },
    userID: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = model("Transaction", transactionSchema);
export default Transaction;