"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
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
import { useInView } from "framer-motion";

const HEADING_TEXT = "CONNECT WITH US";
const DESCRIPTION_TEXT =
  "We would like to work for you. Believe me this will the best platform for your business.";
const FULL_NAME_LABEL = "FULL NAME";
const FULL_NAME_PLACEHOLDER = "Write Your Full Name";
const EMAIL_LABEL = "EMAIL";
const EMAIL_PLACEHOLDER = "Provide Your Email Address";
const CONTACT_LABEL = "CONTACT NUMBER";
const CONTACT_PLACEHOLDER = "Your Contact / Phone Number";
const MESSAGE_LABEL = "MESSAGE OR ENQUIRY";
const MESSAGE_PLACEHOLDER = "Write Your message about your enquiry";
const SUBMIT_TEXT = "SUBMIT";
const SUBMITTING_TEXT = "Submitting...";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: false, margin: "-10% 0px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const form = useForm();

  async function onSubmit() {
    setIsSubmitting(true);
  }

  return (
    <section>
      <div className="continer z-10 relative bg-white py-10 px-6 overflow-hidden">
        <div className="max-w-sm mx-auto p-8 rounded-lg shadow-sm bg-white">
          <div className="mb-8">
            <h3 className="text-3xl font-eraBold mb-3">{HEADING_TEXT}</h3>
            <p className="text-muted-foreground">{DESCRIPTION_TEXT}</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{FULL_NAME_LABEL}</FormLabel>
                    <FormControl>
                      <Input placeholder={FULL_NAME_PLACEHOLDER} {...field} />
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
                    <FormLabel>{EMAIL_LABEL}</FormLabel>
                    <FormControl>
                      <Input placeholder={EMAIL_PLACEHOLDER} {...field} />
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
                    <FormLabel>{CONTACT_LABEL}</FormLabel>
                    <FormControl>
                      <Input placeholder={CONTACT_PLACEHOLDER} {...field} />
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
                    <FormLabel>{MESSAGE_LABEL}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={MESSAGE_PLACEHOLDER}
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
                {isSubmitting ? SUBMITTING_TEXT : SUBMIT_TEXT}
              </Button>
            </form>
          </Form>
        </div>
        <video
          ref={videoRef}
          className="videoContact"
          loop
          muted
          playsInline
          src="/bg/121785-724719741.mp4"
          controls={false}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </section>
  );
}
