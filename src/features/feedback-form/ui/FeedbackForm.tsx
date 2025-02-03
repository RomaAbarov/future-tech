"use client";

import { useActionState, useEffect, useState } from "react";
import { Input, InputLabel, Textarea } from "@/shared/ui";
import { Alert, AlertDescription } from "@/shared/ui/shadcn/alert";
import { AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/shadcn/select";
import PhoneInput, {
  formatPhoneNumberIntl,
  Value,
} from "react-phone-number-input";
import { createMessageAction } from "../model/actions";
import clsx from "clsx";
import "react-phone-number-input/style.css";
import "./FeedbackForm.scss";

export function FeedbackForm() {
  const [value, setValue] = useState<Value>();
  const addPhoneToMessageAction = createMessageAction.bind(null, value);

  const [state, formAction, isPending] = useActionState(
    addPhoneToMessageAction,
    {
      success: false,
      message: "",
    }
  );

  useEffect(() => {
    if (state.success) {
      setValue(undefined);
    }
  }, [state.success]);

  return (
    <form className="feedback-form" action={formAction}>
      <div className="feedback-form__cell field">
        <InputLabel label="First Name" htmlFor="firstName" isRequired />
        <Input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Ivan"
          minLength={2}
          required
          defaultValue={state.inputs?.firstName}
          aria-errormessage="firstName-error"
        />
        {state.errors?.firstName && (
          <p className="field__error" id="firstName-error">
            {state.errors?.firstName}
          </p>
        )}
      </div>
      <div className="feedback-form__cell field">
        <InputLabel label="Last Name" htmlFor="lastName" />
        <Input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Drago"
          defaultValue={state.inputs?.lastName}
        />
        {state.errors?.lastName && (
          <p className="field__error" id="firstName-error">
            {state.errors?.lastName}
          </p>
        )}
      </div>
      <div className="feedback-form__cell field">
        <InputLabel label="Email" htmlFor="email" isRequired />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="test@test.com"
          required
          defaultValue={state.inputs?.email}
        />
        {state.errors?.email && (
          <p className="field__error" id="firstName-error">
            {state.errors?.email}
          </p>
        )}
      </div>
      <div className="feedback-form__cell field">
        <InputLabel label="Phone Number" htmlFor="phoneNumber" />
        <PhoneInput
          defaultCountry="BY"
          value={value}
          onChange={setValue}
          defaultValue={state.inputs?.tel}
        />
        {/* <div className="field__body">
          <Select defaultValue={value} name="codeCountry">
            <SelectTrigger className="select__button">
              <SelectValue />
            </SelectTrigger>
            <SelectContent
              className="select__dropdown"
              position="popper"
              side="bottom"
              sideOffset={4}
              arrowPadding={40}
            >
              {getCountries().map((country) => (
                <SelectItem
                  key={country}
                  className="select__option"
                  value={country}
                ></SelectItem>
              ))}
              <SelectItem className="select__option" value="+7">
                +7
              </SelectItem>
              <SelectItem className="select__option" value="+375">
                +375
              </SelectItem>
              <SelectItem className="select__option" value="+995">
                +995
              </SelectItem>
              <SelectItem className="select__option" value="+370">
                +370
              </SelectItem>
              <SelectItem className="select__option" value="+371">
                +371
              </SelectItem>
              <SelectItem className="select__option" value="+1">
                +1
              </SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="tel"
            id="phoneNumber"
            name="tel"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
            placeholder="(999) 999-99-99"
            defaultValue={state.inputs?.tel}
          />
        </div> */}

        {state.errors?.tel && (
          <p className="field__error" id="firstName-error">
            {state.errors?.tel}
          </p>
        )}
      </div>
      <div className="feedback-form__cell feedback-form__cell--wide field">
        <InputLabel label="Message" htmlFor="message" isRequired />
        <Textarea
          id="message"
          name="message"
          placeholder="Hi!"
          minLength={2}
          required
          defaultValue={state.inputs?.message}
        />
        {state.errors?.message && (
          <p className="field__error" id="firstName-error">
            {state.errors?.message}
          </p>
        )}
      </div>
      <div className="feedback-form__cell feedback-form__cell--wide">
        <div className="feedback-form__actions">
          <div className="feedback-form__agreement">
            <label className="checkbox">
              <Input
                type="checkbox"
                name="checkbox"
                className="checkbox__input"
                required
                defaultChecked={state.inputs?.checkbox === "on" ? true : false}
              />
              <span className="checkbox__label">
                I agree with Terms of Use and Privacy Policy
              </span>
            </label>
            {state.errors?.checkbox && (
              <p className="field__error" id="firstName-error">
                {state.errors?.checkbox}
              </p>
            )}
          </div>
          <button
            className="feedback-form__submit-button button button--accent"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Sending..." : "Send"}
          </button>
        </div>
      </div>

      {/* что сделать с tailwind чтобы заработало variant? */}
      {state.message && (
        <Alert
          className={clsx("alert", {
            "alert--success": state.success,
            "alert--error": !state.success,
          })}
        >
          <AlertCircle />
          {state.success ? "Success" : "Error"}
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
