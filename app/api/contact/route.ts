import { z } from "zod";
import DOMPurify from "isomorphic-dompurify"

const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("O e-mail deve ser um endereço de e-mail válido."),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = formSchema.parse(body);
    const sanitizedMessage = DOMPurify.sanitize(message)

    // TODO: Implementar o envio do e-mail usando sanitizedMessage

    return new Response(JSON.stringify({ message: "Mensagem enviada com sucesso!" }), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ message: "Ocorreu um erro ao enviar a mensagem." }), {
      status: 500,
    });
  }
}
