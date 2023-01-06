import React, { useState, useRef } from "react";
import * as S from "./contact.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Parallax from "parallax-js";
import { useEffect } from "react";
import { SideLine } from "../../assets/svgicon/svgIcons";
import emailjs from "emailjs-com";
import { Footer } from "../../components/common/footer";
import Tooltip from "@material-ui/core/Tooltip";
import { TextField, Button } from "../../components/common/mui";
import { useForm } from "react-hook-form";

const Contact = (props) => {
  const { data, footerData } = props;
  const [statusMessage, setStatusMessage] = useState("");

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    company: yup.string().required("Enter a company name"),
    phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    email: yup.string().email("Please enter a valid email").required(),
  });

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8jtbl79",
        "template_6h7ucl3",
        e.target,
        "user_xcuPRRZ3zqSqXgIz4SAPl"
      )
      .then(
        (result) => {
          setStatusMessage("Email sent success");
        },
        (error) => {
          setStatusMessage(`${error.text} happened`);
        }
      );
  }
  useEffect(() => {
    setTimeout(() => {
      setStatusMessage(null);
    }, 5000);
  }, [statusMessage]);

  useEffect(() => {
    var scene = document.getElementById("contactHead");
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      calibrate: (true, true),
    });
    parallaxInstance.friction(0.2, 0.2);
  }, []);
  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { ref: inputRef, ...inputProps } = register("fullName");
  const { ref: inputrefforcompany, ...inputPropsForCompany } =
    register("company");
  const { ref: inputrefforphonenumber, ...inputPropsforPhoneNumber } =
    register("phoneNumber");
  const { ref: inputrefforemail, ...inputPropsforEmail } = register("email");

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.SideLine>
          <SideLine />
        </S.SideLine>
        <S.Main>
          <S.HeaderWrapper>
            <S.MainHeading>
              <S.Head data-relative-input="true" id="contactHead">
                <S.FirstHeadLayer data-depth="0.6">
                  {data?.heading}
                </S.FirstHeadLayer>
              </S.Head>
              <S.SecHeadLayer strings={[data?.heading]}></S.SecHeadLayer>
            </S.MainHeading>
          </S.HeaderWrapper>

          <S.CompanyInfoWrapper>
            <S.AddressContactWrapper>
              <S.AddressWrapper1>
                <S.Heading>{data.addresstitle}</S.Heading>

                <S.Ptag>{data.address}</S.Ptag>
              </S.AddressWrapper1>
              <S.AddressWrapper2>
                <S.Heading>{data.addresstitle}</S.Heading>
                <Tooltip title="Add" placement="top">
                  <S.Ptag>{data.address}</S.Ptag>
                </Tooltip>
              </S.AddressWrapper2>
              <S.ContactWrapper1>
                <S.Heading>{data.contacttitle}</S.Heading>
                <div>
                  <S.Ptag>{data.phonenumber}</S.Ptag>
                  <S.Ptag>{data.email}</S.Ptag>
                </div>
              </S.ContactWrapper1>
            </S.AddressContactWrapper>
            <S.FormWrapper>
              <S.Heading>{data.callbackTitle}</S.Heading>
              <S.Form>
                <form onSubmit={(e) => sendEmail(e)} className="w-full">
                  <S.TextFieldWrapper>
                    <TextField
                      label="Full Name"
                      name="fullName"
                      inputRef={ref}
                      {...inputProps}
                      error={errors.fullName ? true : false}
                      autoComplete="off"
                    />

                    <TextField
                      label="Company Name"
                      fullWidth
                      name="company"
                      inputrefforcompany={ref1}
                      {...inputPropsForCompany}
                      error={errors.company ? true : false}
                      autoComplete="off"
                    />
                  </S.TextFieldWrapper>
                  <S.TextFieldWrapper className="mb-">
                    <TextField
                      label="Phone Number"
                      fullWidth
                      name="phoneNumber"
                      inputrefforphonenumber={ref2}
                      {...inputPropsforPhoneNumber}
                      error={errors.phoneNumber ? true : false}
                      autoComplete="off"
                    />

                    <TextField
                      label="Email"
                      fullWidth
                      inputrefforemail={ref3}
                      {...inputPropsforEmail}
                      name="email"
                      error={errors.email ? true : false}
                      autoComplete="off"
                    />
                  </S.TextFieldWrapper>
                  <p
                    className="text-l text-red-800"
                    style={{ fontWeight: "bold" }}
                  >
                    {errors.phoneNumber?.message} {errors.email?.message}
                  </p>
                  <Button type="submit" name="Send" disabled={!isValid} />
                </form>
                {statusMessage && <S.Message>{statusMessage}</S.Message>}
              </S.Form>
            </S.FormWrapper>
          </S.CompanyInfoWrapper>
        </S.Main>
      </S.ContentWrapper>
      <Footer data={footerData} />
    </S.Container>
  );
};

export default Contact;
