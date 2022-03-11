import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const selectDonor = state => state.selectDonor

useSelector(selectDonor)