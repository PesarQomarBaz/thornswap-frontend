import { useContext } from 'react'
import { ProfileCreationContext } from './ProfileCreationProvider'

const useProfileCreation = () => useContext(ProfileCreationContext)

export default useProfileCreation
