import React from 'react'
import 'beercss'

export const HomePage: React.FC = () => {
  return (
    <main className="ml-[5rem] p-5 flex flex-col h-[100vh]">
      <article className="text-on-primary text-center flex flex-col gap-5 px-[20%] py-[10%] no-elevate bg-gradient-to-r from-purple-500 to-pink-500 items-center justify-center">
        <h1 className="text-5xl font-semibold">Welcome to myLearning 2.0</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          mollitia ea sequi nam odit est, porro obcaecati explicabo tempora
          sunt, voluptatem id ullam nihil eligendi tempore dolorem modi. Quo
          quod, fuga consequuntur veritatis neque fugiat saepe sit earum ipsam
          odio! Maxime cupiditate in, suscipit tempora veniam quae incidunt
          dicta fugiat.
        </p>
      </article>
      <article className="flex-1 text-on-surface-variant text-center flex flex-col gap-5 px-[20%] py-[10%] no-elevate bg-surface-variant">
        <h1 className="text-5xl font-semibold"> </h1>
        <p> </p>
      </article>
    </main>
  )
}

export default HomePage
