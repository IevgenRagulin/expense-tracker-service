import {
  CreateExpenseResponse, CreateWalletResponse,
  MutationCreateExpenseArgs,
  MutationCreateWalletArgs,
  Resolvers
} from "../generated/types";
import {Wallets} from "../backend/Wallets";

async function createExpense (_, args: MutationCreateExpenseArgs): Promise<CreateExpenseResponse> {
  const { input } = args;
  // TODO: support non default wallet too (authorization too)
  // TODO: put this on the context
  return {
    walletId: 'string',
    category: input.category,
    value: input.value,
    date: input.date
  }
}

async function createWallet(_, args: MutationCreateWalletArgs): Promise<CreateWalletResponse> {
  const { input } = args;
  const walletsBackend = new Wallets();
  // TODO: only allow 10 wallets per user
  // TODO: validate userId
  // TODO: validate currency
  const response = await walletsBackend.create(input.userId, input.currency)
  return {
    userId: input.userId,
    walletId: response.walletId,
    currency: input.currency
  }
}

export const resolvers: Resolvers = {
  Query: {
    hello: () => 'worldd',
  },
  Mutation: {
    createExpense,
    createWallet
  }
}