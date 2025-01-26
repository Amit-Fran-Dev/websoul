"use client";

import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
// import * as z from "zod"

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/components/ui/use-toast"

// const formSchema = z.object({
//   fullName: z.string().min(2, {
//     message: "Full name must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   contactNumber: z.string().min(10, {
//     message: "Please enter a valid phone number.",
//   }),
//   message: z.string().min(10, {
//     message: "Message must be at least 10 characters.",
//   }),
// })

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    // resolver: zodResolver(formSchema),
    // defaultValues: {
    //   fullName: "",
    //   email: "",
    //   contactNumber: "",
    //   message: "",
    // },
  });

  async function onSubmit() {
    setIsSubmitting(true);
    // try {
    //   // Here you would typically send the form data to your server
    //   await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
    //   toast({
    //     title: "Success!",
    //     description: "Your message has been sent. We'll get back to you soon.",
    //   })
    //   form.reset()
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Something went wrong. Please try again.",
    //     variant: "destructive",
    //   })
    // } finally {
    //   setIsSubmitting(false)
    // }
  }

  return (
    <section>
      <div
        className="continer z-10 relative bg-white py-10 px-6 overflow-hidden"
      >
        <div className="max-w-sm mx-auto p-8 rounded-lg shadow-sm bg-white">
          <div className="mb-8">
            <h3 className="text-3xl font-eraBold mb-3">CONNECT WITH US</h3>
            <p className="text-muted-foreground">
              We would like to work for you. Believe me this will the best
              platform for your business.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FULL NAME</FormLabel>
                    <FormControl>
                      <Input placeholder="Write Your Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EMAIL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Provide Your Email Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CONTACT NUMBER</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Contact / Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>MESSAGE OR ENQUIRY</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write Your message about your enquiry"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full font-eraBold bg-black text-white hover:bg-gray-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </Button>
            </form>
          </Form>
        </div>
        <video
          // tabindex="-1"
          id="vjs_video_3_html5_api"
          className="videoContact"
          loop={true}
          muted="muted"
          autoplay=""
          // src="https://cdn.pixabay.com/video/2022/09/30/133081-755697272_tiny.mp4"
          // src="https://cdn.pixabay.com/video/2020/12/03/58201-487176833_tiny.mp4"
          // src="https://cdn.pixabay.com/video/2022/06/22/121785-724719741_tiny.mp4"
          src="/bg/121785-724719741.mp4"
          controls={false}
        />

        {/* <img
            className="videoContact"
            src="/bg.gif"
            controls={false}
          /> */}
      </div>
    </section>
  );
}
