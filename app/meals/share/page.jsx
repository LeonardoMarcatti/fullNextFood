'use client'

import Link from "next/link";
import classes from './page.module.css';
import MealsForm from "@/components/meals/MealsForm";
import React from "react";
import {useFormState} from 'react-dom'
import { handleSubmit } from "@/utils/actions";

const Share = () => {
  const [state, formAction] = useFormState(handleSubmit, {message: null})
   return <>
      <aside className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </aside>
      <main className={classes.main}>
        <MealsForm classes={classes} action={formAction}/>
        {
         state.message && <p>{state.message}</p>
        }
      </main>
      <Link href="/meals">Back</Link>
   </>
}

export default Share