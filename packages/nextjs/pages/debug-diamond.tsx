import { useEffect } from "react";
import type { NextPage } from "next";
import { useLocalStorage } from "usehooks-ts";
import { MetaHeader } from "~~/components/MetaHeader";
import { DiamondContractUI } from "~~/components/diamond/DiamondContractUI";
import { ContractName } from "~~/utils/scaffold-eth/contract";
import { getContractNames } from "~~/utils/scaffold-eth/contractNames";

const selectedContractStorageKey = "scaffoldEth2.selectedContract";
const contractNames = getContractNames();

const DebugDiamond: NextPage = () => {
  const [selectedContract, setSelectedContract] = useLocalStorage<ContractName>(
    selectedContractStorageKey,
    contractNames[0],
  );

  useEffect(() => {
    if (!contractNames.includes(selectedContract)) {
      setSelectedContract(contractNames[0]);
    }
  }, [selectedContract, setSelectedContract]);

  useEffect(() => {
    const _contractNames = contractNames.filter(
      contractName => contractName.includes("Facet") || contractName.includes("DiamondContract"),
    );
    setSelectedContract(_contractNames[_contractNames.length - 1]);
  }, []);

  return (
    <>
      <MetaHeader
        title="Debug Diamond Contracts | Scaffold-ETH 2"
        description="Debug your deployed 🏗 Scaffold-ETH 2 diamond contracts in an easy way"
      />
      <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        {contractNames.length === 0 ? (
          <p className="text-3xl mt-14">No contracts found!</p>
        ) : (
          <>
            {contractNames.length > 1 && (
              <div className="flex flex-row gap-2 w-full max-w-7xl pb-1 px-6 lg:px-10 flex-wrap">
                {contractNames
                  .filter(contractName => contractName.includes("Facet") || contractName.includes("DiamondContract"))
                  .map(contractName => (
                    <button
                      className={`btn btn-secondary btn-sm font-thin ${
                        contractName === selectedContract ? "bg-base-300" : "bg-base-100"
                      }`}
                      key={contractName}
                      onClick={() => setSelectedContract(contractName)}
                    >
                      {contractName}
                    </button>
                  ))}
              </div>
            )}
            {contractNames
              .filter(contractName => contractName.includes("Facet") || contractName.includes("DiamondContract"))
              .map(contractName => (
                <>
                  <DiamondContractUI
                    key={contractName}
                    contractName={contractName}
                    className={contractName === selectedContract ? "" : "hidden"}
                  />
                </>
              ))}
          </>
        )}
      </div>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Debug Contracts</h1>
        <p className="text-neutral">
          You can debug & interact with your deployed contracts here.
          <br /> Check{" "}
          <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1">
            packages / nextjs / pages / debug-diamond.tsx
          </code>{" "}
        </p>
      </div>
    </>
  );
};

export default DebugDiamond;
