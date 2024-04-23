import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";
import { z } from "zod";
import cors from "@fastify/cors";
import { Resend } from "resend";

const app = fastify();

const resend = new Resend(env.RESEND_API_KEY);

app.register(cors, {
  origin: "http://localhost:3030", // Replace with your frontend origin
  credentials: true, // Enable credentials
});

app.get("/email", async () => {
  console.log("GET /hello");
});

app.post("/cotacao", async (request, reply) => {
  const createTransactionBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().min(10).max(11),
    origin: z.string(),
    destination: z.string(),
    type: z.string(),
  });

  const { name, email, phone, origin, destination, type } =
    createTransactionBodySchema.parse(request.body);

  resend.emails
    .send({
      from: "onboarding@resend.dev",
      to: env.JR_EMAIL,
      subject: "Formulário de Cotação - Site JR Express",
      html:
        "<p>Uma nova solicitação de cotação foi registrada no site da JR Express.</p> <p>Confira os detalhes abaixo:</p> <p>Nome: " +
        name +
        "</p> <p>Email: " +
        email +
        "</p> <p>Telefone: " +
        phone +
        "</p> <p>Origem da carga: " +
        origin +
        "</p> <p>Destino da carga: " +
        destination +
        "</p> <p>Tipo da carga: " +
        type +
        "</p>",
    })
    .then(() => {
      console.log("Email sent!");
    });

  return reply.status(200).send();
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
