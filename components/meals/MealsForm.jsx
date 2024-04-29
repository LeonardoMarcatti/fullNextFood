'use client'

import ImagePicker from "./imagePicker"
import { handleSubmit } from "@/utils/actions"
import React from "react"
import MealsSubmitButton from "./MealsSubmitButton"

const MealsForm = ({classes, action}) => {
   return <>
      <form className={classes.form} action={action}>
          {/* Geralmente action é uma url mas no next é uma função já que estamos dentro do servidor */}
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
         <ImagePicker label="Image" name="image" />
          <p className={classes.actions}>
            <MealsSubmitButton />
          </p>
        </form>
   </>
}

export default MealsForm