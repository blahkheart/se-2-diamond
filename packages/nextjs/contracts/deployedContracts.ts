/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    DiamondCutFacet: {
      address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      abi: [
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotAddFunctionToDiamondThatAlreadyExists",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4[]",
              name: "_selectors",
              type: "bytes4[]",
            },
          ],
          name: "CannotAddSelectorsToZeroAddress",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotRemoveFunctionThatDoesNotExist",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotRemoveImmutableFunction",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotReplaceFunctionThatDoesNotExists",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotReplaceFunctionWithTheSameFunctionFromTheSameFacet",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4[]",
              name: "_selectors",
              type: "bytes4[]",
            },
          ],
          name: "CannotReplaceFunctionsFromFacetWithZeroAddress",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotReplaceImmutableFunction",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_action",
              type: "uint8",
            },
          ],
          name: "IncorrectFacetCutAction",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_initializationContractAddress",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_calldata",
              type: "bytes",
            },
          ],
          name: "InitializationFunctionReverted",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_contractAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "_message",
              type: "string",
            },
          ],
          name: "NoBytecodeAtAddress",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_facetAddress",
              type: "address",
            },
          ],
          name: "NoSelectorsProvidedForFacetForCut",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
            {
              internalType: "address",
              name: "_contractOwner",
              type: "address",
            },
          ],
          name: "NotContractOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_facetAddress",
              type: "address",
            },
          ],
          name: "RemoveFacetAddressMustBeZeroAddress",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "facetAddress",
                  type: "address",
                },
                {
                  internalType: "enum IDiamond.FacetCutAction",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bytes4[]",
                  name: "functionSelectors",
                  type: "bytes4[]",
                },
              ],
              indexed: false,
              internalType: "struct IDiamond.FacetCut[]",
              name: "_diamondCut",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "address",
              name: "_init",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "_calldata",
              type: "bytes",
            },
          ],
          name: "DiamondCut",
          type: "event",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "facetAddress",
                  type: "address",
                },
                {
                  internalType: "enum IDiamond.FacetCutAction",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bytes4[]",
                  name: "functionSelectors",
                  type: "bytes4[]",
                },
              ],
              internalType: "struct IDiamond.FacetCut[]",
              name: "_diamondCut",
              type: "tuple[]",
            },
            {
              internalType: "address",
              name: "_init",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_calldata",
              type: "bytes",
            },
          ],
          name: "diamondCut",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        diamondCut: "contracts/interfaces/IDiamondCut.sol",
      },
    },
    DiamondLoupeFacet: {
      address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      abi: [
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_functionSelector",
              type: "bytes4",
            },
          ],
          name: "facetAddress",
          outputs: [
            {
              internalType: "address",
              name: "facetAddress_",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "facetAddresses",
          outputs: [
            {
              internalType: "address[]",
              name: "facetAddresses_",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_facet",
              type: "address",
            },
          ],
          name: "facetFunctionSelectors",
          outputs: [
            {
              internalType: "bytes4[]",
              name: "_facetFunctionSelectors",
              type: "bytes4[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "facets",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "facetAddress",
                  type: "address",
                },
                {
                  internalType: "bytes4[]",
                  name: "functionSelectors",
                  type: "bytes4[]",
                },
              ],
              internalType: "struct IDiamondLoupe.Facet[]",
              name: "facets_",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        facetAddress: "contracts/interfaces/IDiamondLoupe.sol",
        facetAddresses: "contracts/interfaces/IDiamondLoupe.sol",
        facetFunctionSelectors: "contracts/interfaces/IDiamondLoupe.sol",
        facets: "contracts/interfaces/IDiamondLoupe.sol",
        supportsInterface: "contracts/interfaces/IERC165.sol",
      },
    },
    OwnershipFacet: {
      address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
            {
              internalType: "address",
              name: "_contractOwner",
              type: "address",
            },
          ],
          name: "NotContractOwner",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "owner_",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        owner: "contracts/interfaces/IERC173.sol",
        transferOwnership: "contracts/interfaces/IERC173.sol",
      },
    },
    Test1Facet: {
      address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "counter",
              type: "address",
            },
          ],
          name: "Counter",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "counter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          name: "NewCounter",
          type: "event",
        },
        {
          inputs: [],
          name: "count",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllCounters",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
          ],
          name: "getCountFor",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getDev",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMaxCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "getMaxCountPerAddress",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "dev",
              type: "address",
            },
          ],
          name: "setDev",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    Test2Facet: {
      address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "something",
              type: "address",
            },
          ],
          name: "TestEvent",
          type: "event",
        },
        {
          inputs: [],
          name: "readFacetStorage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "writeFacetStorage",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    YourContract: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "premium",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
    YourDiamondContract: {
      address: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
      abi: [
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "facetAddress",
                  type: "address",
                },
                {
                  internalType: "enum IDiamond.FacetCutAction",
                  name: "action",
                  type: "uint8",
                },
                {
                  internalType: "bytes4[]",
                  name: "functionSelectors",
                  type: "bytes4[]",
                },
              ],
              internalType: "struct IDiamond.FacetCut[]",
              name: "_diamondCut",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "init",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "initCalldata",
                  type: "bytes",
                },
              ],
              internalType: "struct DiamondArgs",
              name: "_args",
              type: "tuple",
            },
          ],
          stateMutability: "payable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotAddFunctionToDiamondThatAlreadyExists",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4[]",
              name: "_selectors",
              type: "bytes4[]",
            },
          ],
          name: "CannotAddSelectorsToZeroAddress",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotRemoveFunctionThatDoesNotExist",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotRemoveImmutableFunction",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotReplaceFunctionThatDoesNotExists",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotReplaceFunctionWithTheSameFunctionFromTheSameFacet",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4[]",
              name: "_selectors",
              type: "bytes4[]",
            },
          ],
          name: "CannotReplaceFunctionsFromFacetWithZeroAddress",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_selector",
              type: "bytes4",
            },
          ],
          name: "CannotReplaceImmutableFunction",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_functionSelector",
              type: "bytes4",
            },
          ],
          name: "FunctionNotFound",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_action",
              type: "uint8",
            },
          ],
          name: "IncorrectFacetCutAction",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_initializationContractAddress",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_calldata",
              type: "bytes",
            },
          ],
          name: "InitializationFunctionReverted",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_contractAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "_message",
              type: "string",
            },
          ],
          name: "NoBytecodeAtAddress",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_facetAddress",
              type: "address",
            },
          ],
          name: "NoSelectorsProvidedForFacetForCut",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_facetAddress",
              type: "address",
            },
          ],
          name: "RemoveFacetAddressMustBeZeroAddress",
          type: "error",
        },
        {
          stateMutability: "payable",
          type: "fallback",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
