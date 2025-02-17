import { VStack } from "@chakra-ui/react";
import React from "react";
import EmployeeTable from "./components/ui/EmployeeTable";
import { useQuery} from "@tanstack/react-query"
const App = () => {
  const {isPending, isError, data, error}  = useQuery({
    

  })
  return (
    <VStack gap ="6" align ="flex-start">
      <EmployeeTable />

    </VStack>
  );
};

export default App;
