import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const mainNetChainId = 56
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[mainNetChainId]
}

export const getCakeAddress = () => getAddress(addresses.cake)
export const getMasterChefAddress = () => getAddress(addresses.masterChef)
export const getMulticallAddress = () => getAddress(addresses.mulltiCall)
export const getWbnbAddress = () => getAddress(addresses.wbnb)
export const getLotteryAddress = () => getAddress(addresses.lottery)
export const getLotteryTicketAddress = () => getAddress(addresses.lotteryNFT)
export const getPancakeProfileAddress = () => getAddress(addresses.pancakeProfile)
export const getPancakeRabbitsAddress = () => getAddress(addresses.pancakeRabbits)
export const getBunnyFactoryAddress = () => getAddress(addresses.bunnyFactory)
export const getClaimRefundAddress = () => getAddress(addresses.claimRefund)
export const getPointCenterIfoAddress = () => getAddress(addresses.pointCenterIfo)
