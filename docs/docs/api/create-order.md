---
sidebar_position: 2
---

# Create Order

```typescript title="Base URL"
https://api.pointer.io.vn
```

---

### Webhook Requirements

1. The webhook endpoint must accept `POST` requests.
2. Ensure the endpoint is secured (e.g., via authentication or IP whitelisting).
3. The webhook should process and store the received payload (`orderID` and `status`).

### Webhook Payload

Pointer Wallet will send the following payload for `Payment` events:

```json
{
  "orderID": string,
  "status": 200
}
```
# API
```typescript title="Create Order"
curl -X POST /api/payment/create-order
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer ' + secret_key \
-d {
  amount: number;
  currency: "VND" | "USD" | "ETH";
  message: string;
  userID: string;
  orderID: string;
  returnUrl: string;
  orders?: [{
    name: string;
    image: string;
    description: string;
    quantity: number;
    price: number;
  }];
}
```

# Response

```typescript title="Response"
{
    "url":"https://pointer.io.vn/payment-gateway?token={token}"
}
```

# HTTP Status

| Status  | OK            | Description             |
| ------- | ------------- | ----------------------- |
| **200** | OK            | Order have been created |
| **401** | Unauthorized  | Secret key is invalid   |
| **500** | Server Errors | Something went wrong!   |
