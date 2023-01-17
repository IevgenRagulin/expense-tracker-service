import {CreateExpenseInput, CreateExpenseResponse, MutationCreateExpenseArgs, Resolvers} from "../generated/types";

async function createExpense (_, args: MutationCreateExpenseArgs): Promise<CreateExpenseResponse> {
  const { input } = args;
  return {
    category: input.category,
    value: input.value,
    date: input.date
  }
}

export const resolvers: Resolvers = {
  Query: {
    hello: () => 'worldd',
  },
  Mutation: {
    createExpense
  }
}