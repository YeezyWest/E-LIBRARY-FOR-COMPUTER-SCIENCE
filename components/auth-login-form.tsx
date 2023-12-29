import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Button } from './ui/button'

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


export default function AuthLoginForm() {
          // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
    },
  })
  return (
    <>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
         <FormField
    control={form.control}
       name="email"
       render={({ field }) => (
        <FormItem>
        <FormControl>
        <input  className='block w-full appearance-none rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-gray-600 placeholder-gray-400 shadow-none focus:border-gray-200 focus:outline-none focus:ring-gray-200 sm:text-sm'  placeholder="Your Email" {...field} />
        </FormControl>
        <FormControl>
         <input  className='block w-full appearance-none rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-gray-600 placeholder-gray-400 shadow-none focus:border-gray-200 focus:outline-none focus:ring-gray-200 sm:text-sm'  placeholder="Password" {...field} />
        </FormControl>
        </FormItem>
         )}
       />
        <Button className="btn-shadow relative mt-4 w-full rounded-lg bg-[#00453E] px-4 text-lg font-semibold text-white transition-all hover:bg-green-800" type="submit">Login</Button>
        </form>
       </Form> 

       <div className="mt-9">
            <p className="my-2 whitespace-nowrap text-center text-sm text-black">
              Login with your existing username and Password.
            </p>
            <span className="my-3 flex justify-center text-sm text-gray-600">
              Don’t have an account?
              {/* <Link href="https://nogicjqs.gov.ng/guidelines/service-companies"> */}
                <span className="pl-2 font-medium text-[#00453E] underline underline-offset-2">
                  Click here to Register
                </span>
              {/* </Link> */}
            </span>
          </div>
    </>
  )
}
