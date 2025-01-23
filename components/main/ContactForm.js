"use client"

import { useState } from "react"
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
// import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm({
    // resolver: zodResolver(formSchema),
    // defaultValues: {
    //   fullName: "",
    //   email: "",
    //   contactNumber: "",
    //   message: "",
    // },
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-sm">
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">CONNECT WITH US</h1>
          <p className="text-muted-foreground">
            We would like to work for you. Believe me this will the best platform for your business.
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
                    <Input placeholder="Provide Your Email Address" {...field} />
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
                    <Input placeholder="Your Contact / Phone Number" {...field} />
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

            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

