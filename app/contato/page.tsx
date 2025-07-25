import { ContactForm } from "@/components/contact-form";

export default function ContatoPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold">Contato</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Preencha o formulário abaixo para entrar em contato conosco.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
