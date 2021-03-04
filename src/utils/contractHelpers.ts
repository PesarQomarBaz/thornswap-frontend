import { getPancakeProfileAddress, getPancakeRabbitsAddress, getBunnyFactoryAddress } from 'utils/addressHelpers'
import { getContract } from 'utils/web3'
import profileABI from 'config/abi/pancakeProfile.json'
import pancakeRabbitsAbi from 'config/abi/pancakeRabbits.json'
import bunnyFactoryAbi from 'config/abi/bunnyFactory.json'

export const getProfileContract = () => getContract(profileABI, getPancakeProfileAddress())

export const getPancakeRabbitContract = () => getContract(pancakeRabbitsAbi, getPancakeRabbitsAddress())

export const getBunnyFactoryContract = () => getContract(bunnyFactoryAbi, getBunnyFactoryAddress())

export default null
