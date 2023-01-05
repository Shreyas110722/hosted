import React,{useState} from "react";
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

function Contact({ data, footerData }) {

 const [statusMessage, setStatusMessage] = useState("");

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    company: yup.string().required("Enter a company name"),
    phoneNumber: yup
      .number("Please enter only numbers")
      .positive()
      .integer("Please enter numbers only")
      .required(),
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
                      {...register("fullName")}
                      error={errors.fullName ? true : false}
                    />

                    <TextField
                      label="Company Name"
                      fullWidth
                      name="company"
                      {...register("company")}
                      error={errors.company ? true : false}
                    />
                  </S.TextFieldWrapper>
                  <S.TextFieldWrapper className="mb-3">
                    <TextField
                      label="Phone Number"
                      fullWidth
                      name="phoneNumber"
                      {...register("phoneNumber")}
                      error={errors.phoneNumber ? true : false}
                    />

                    <TextField
                      label="Email"
                      fullWidth
                      {...register("email")}
                      name="email"
                      error={errors.email ? true : false}
                    />
                  </S.TextFieldWrapper>
                  <Button type="submit" name="Send" disabled={!isValid} />
                  <p className="text-xs text-red-800">
                    {errors.phoneNumber?.message} {errors.email?.message}
                  </p>
                </form>
                <S.Message >{statusMessage}</S.Message>
              </S.Form>
            </S.FormWrapper>
          </S.CompanyInfoWrapper>
        </S.Main>
      </S.ContentWrapper>
      <Footer data={footerData} />
    </S.Container>
  );
}

export default Contact;
