import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AllInputs,
  Button,
  Error,
  FormContainer,
  FormInput,
  FormUrl,
  MetadataCard,
  MetadataContainer,
  MetadataDescription,
  MetadataError,
  MetadataImage,
  MetadataTitle,
  MetadataUrl,
} from "./form.style";
import { urlSchema } from "../validations/urlSchema.validation";
import { fetchUrls } from "../utils/fetch";

export default function Form() {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    mode: "all",
    resolver: zodResolver(urlSchema),
  });

  const [metadata, setMetadata] = useState([]);

  const onSubmit = async (data) => {
    try {
      const metadata = await fetchUrls({
        url1: data.url1,
        url2: data.url2,
        url3: data.url3,
      });

      setMetadata(metadata);

      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <FormContainer>
        <FormUrl onSubmit={handleSubmit(onSubmit)}>
          <AllInputs>
            {["url1", "url2", "url3"].map((url) => (
              <div key={url}>
                <FormInput placeholder="Enter Url" {...register(url)} />
                {errors[url] && <Error>URL is required</Error>}
              </div>
            ))}
          </AllInputs>
          <Button type="submit">Submit</Button>
        </FormUrl>
      </FormContainer>

      <MetadataContainer>
        {metadata.map((data, index) => (
          <MetadataCard key={index}>
            <MetadataUrl href={data.url} target="_blank">
              {index + 1}. {data.url}
            </MetadataUrl>
            <MetadataTitle>
              Title: {data.title ? data.title : "No title"}
            </MetadataTitle>
            <MetadataDescription>
              Description:{" "}
              {data.description ? data.description : "No description"}
            </MetadataDescription>
            {data.image.length > 0 && (
              <MetadataImage src={data.image[0]} alt={data.title} />
            )}
          </MetadataCard>
        ))}
      </MetadataContainer>

      {metadata.some((data) => data.error) && (
        <MetadataError>
          <span style={{ color: "red" }}>
            Some URLs are invalid or the server is down
          </span>
        </MetadataError>
      )}
    </div>
  );
}
