import { useMutation } from "@tanstack/react-query";
import { handleFormFn } from "@/api/handle-form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  type: string;
};

export default function Formulario() {
  const { register, handleSubmit, reset, formState } = useForm<FormInputs>();

  const { isValid } = formState;

  const { mutateAsync: sendFormFn } = useMutation({
    mutationFn: handleFormFn,
  });

  async function handleForm(data: any) {
    try {
      await sendFormFn({
        name: data.name,
        email: data.email,
        phone: data.phone,
        origin: data.origin,
        destination: data.destination,
        type: data.type,
      });

      reset();

      toast.success("Formulário enviado com sucesso!");
    } catch (error) {
      toast.error("Erro ao enviar formulário");
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="
                            flex flex-col items-center justify-center
                            "
        style={{
          boxShadow: "0px 10px 50px 0px rgba(0, 0, 0, 0.25)",
          borderRadius: "4px",
        }}
      >
        <h2 className="text-2xl mt-[18.8px] font-medium">
          Formulário de Cotação
        </h2>
        <span className="mx-[35px] mt-3 text-center font-normal">
          Preencha os dados abaixo e a nossa equipe irá entrar em contato para
          lhe enviar uma cotação.
        </span>

        <input
          className="border mt-7 mx-10 p-4 w-10/12 rounded-md border-gray-900"
          placeholder="Nome"
          type="text"
          {...register("name", { required: true })}
        />
        <input
          className="border mt-3 mx-10 p-4 w-10/12 rounded-md border-gray-900"
          placeholder="Email"
          type="text"
          {...register("email", { required: true })}
        />
        <input
          className="border mt-3 mx-10 p-4 w-10/12 rounded-md border-gray-900"
          placeholder="Telefone"
          type="text"
          {...register("phone", { required: true })}
        />
        <input
          className="border mt-3 mx-10 p-4 w-10/12 rounded-md border-gray-900"
          placeholder="Origem da Carga"
          type="text"
          {...register("origin", { required: true })}
        />
        <input
          className="border mt-3 mx-10 p-4 w-10/12 rounded-md border-gray-900"
          placeholder="Destino da Carga"
          type="text"
          {...register("destination", { required: true })}
        />
        <input
          className="border mt-3 mx-10 p-4 w-10/12 rounded-md border-gray-900"
          placeholder="Tipo da Carga"
          type="text"
          {...register("type", { required: true })}
        />

        <button
          type="submit"
          disabled={!isValid}
          className=" w-10/12 mt-7 mb-6 p-4 text-white bg-[#E6293F] rounded-md
              hover:bg-[#C9123F] transition duration-300 disabled:cursor-not-allowed"
        >
          Solicitar Cotação
        </button>
      </form>
    </>
  );
}
