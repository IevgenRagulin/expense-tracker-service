import { DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";
import {ddbClient} from "../util/ddbClient";
import {PutItemCommand} from "@aws-sdk/client-dynamodb";

type Wallet = {
  userId: string
  walletId: string
}

const TABLE_NAME = 'money-tracker-wallets';
const documentClient = DynamoDBDocumentClient.from(ddbClient, {});

export class Wallets {
  async create (userId: string, currency: string): Promise<Wallet> {
    documentClient.send(new PutItemCommand({
      TableName: TABLE_NAME,
      Item: {
        userId
      }
    }))
    return {
      userId,
      walletId: 'string'
    };
  }

  async walletsForUser (user: string): Promise<Wallet[]> {
    return [];
  }
}