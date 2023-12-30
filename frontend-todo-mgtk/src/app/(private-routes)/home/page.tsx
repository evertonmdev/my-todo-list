import Container from "@/utils/components/Container";
import Header from "@/utils/components/Header/Header";
import ListByStatus from "@/utils/components/TodoList/ListByStatus";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-start items-center pb-5 bg-primary dark:bg-primary-dark text-primary dark:text-primary-dark ">
      <Header />
      <Container>
        <div className="grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ListByStatus key={"a_fazer"} filtro="a_fazer" title="A Fazer" endContent={<span>🔴</span>} />
          <ListByStatus key={"fazendo"} filtro="fazendo" title="Fazendo" endContent={<span>🟠</span>} />
          <ListByStatus key={"feito"} filtro="feito" title="Feito" endContent={<span>🟢</span>} />
        </div>
      </Container>
    </main>
  )
}
