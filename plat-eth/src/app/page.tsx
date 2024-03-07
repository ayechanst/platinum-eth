"use client";
import Link from "next/link";
import type { NextPage } from "next";

const Main: NextPage = () => {
  return (
    <>
      <div className="hero min-h-screen bg-teal-500">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Platinum Ethereum
            </h1>
            <p className="py-6">
              A knowledge resource crafter with love and
              care, meant to be followed along with the
              speedruneth challenge over at Scaffold-Eth!
              The goal of this resource is to teach using
              unconventional but advanced learning
              techniques, a school of memorization similar
              to those who memorize pi to the nth number or
              practice speed memorization.
            </p>
            <Link
              href="/prelude"
              className="btn btn-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
