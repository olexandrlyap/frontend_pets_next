import axios from "axios";
import { useQuery } from "react-query";
import { EXPRESS_URL } from "../config";

export const fetchPets = async ({ skip, limit }) => {
  const response = await axios.get(`${EXPRESS_URL}/api/v1/pets`, { params: { skip, limit } })
  return response.data.pets
}

export const usePetsQuery = ({ skip = 0, limit } = {}) => useQuery(['pets', skip, limit], () => fetchPets({ skip, limit }))

export const fetchTags = async () => {
  const response = await axios.get(`${EXPRESS_URL}/api/v1/tags`)
  return response.data.tags
}

export const useTagsQuery = () => useQuery('tags', fetchTags)

export const fetchCategoryAge = async () => {
  const response = await axios.get(`${EXPRESS_URL}/api/v1/pet-categories/categoryAge`)
  return response.data.data.types
}

export const useCategoryAgeQuery = () => useQuery('categoryAge', fetchCategoryAge)

export const fetchCategoryContracts = async () => {
  const response = await axios.get(`${EXPRESS_URL}/api/v1/pet-categories/categoryContracts`)
  return response.data.data.types
}

export const useCategoryContractsQuery = () => useQuery('categoryContracts', fetchCategoryContracts)

export const fetchCategoryTypes = async () => {
  const response = await axios.get(`${EXPRESS_URL}/api/v1/pet-categories/categoryTypes`)
  return response.data.data.types
}

export const useCategoryTypesQuery = () => useQuery('categoryTypes', fetchCategoryTypes)