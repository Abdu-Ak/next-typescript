import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  setSelected: (manufacturer: string) => void;
  selected: string;
}

export interface SearchBarProps {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
    title : string
    value :string
}

export interface CustomFilterProps {
  setFilter: (filter: any ) => void
   title :string
   options : OptionProps[]
}

export interface ShowMoreProps{
  setLimit: (limit: number ) => void

   pageNumber : number
   isNext : boolean
} 

export interface HomeProps {
  searchParams : FilterProps
}