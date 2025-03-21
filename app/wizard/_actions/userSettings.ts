"use server";

import { db } from "@/lib/prisma";
import { updateUserCurrencySchema } from "@/schema/userSettings";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function updateUserCurrency(currency: string) {
  const parseBody = updateUserCurrencySchema.safeParse({ currency });

  if (!parseBody.success) {
    throw parseBody.error;
  }

  const user = await currentUser();

  if (!user) {
    redirect("/sigb-in");
  }

  const userSettings = await db.userSettings.update({
    where: {
      userId: user.id,
    },
    data: {
      currency,
    },
  });

  return userSettings;
}
