"use client"

import * as z from "zod"

const formSchema = z.object({
  email: z.string().min(2).max(50),
})
