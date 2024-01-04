"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Footer() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <>
      <div className="bg-black ">
        <div className="flex justify-between items-start p-10  container gap-10">
          <div className="">
            <Image
              src="/img/LOGO copy.png"
              alt="logo"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-white font-semibold">Home</h1>
            <ul className="text-gray-400 space-y-3">
              <li>About us</li>
              <li>Team</li>
              <li>What we do</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-white font-semibold">More</h1>
            <ul className="text-gray-400 space-y-3">
              <li>Projects</li>
              <li>Events</li>
              <li>Donate</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-white font-semibold">Connect </h1>
            <ul className="text-gray-400 space-y-3">
              <li className="text-2xl">
                <FaFacebook />
              </li>
              <li className="text-2xl">
                <FaInstagram />
              </li>
              <li className="text-2xl">
                <FaTwitter />
              </li>
              <li className="2xl">
                <FaLinkedin />
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-white font-bold text-3xl w-[80%] mx-auto">
              Subscribe to get latest updates
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex items-center justify-center mt-5"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          className="p-2 outline-none border-[1px] bg-black rounded-md"
                          placeholder="Your Email"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  className="p-5 bg-white text-black hover:bg-gray-200"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
