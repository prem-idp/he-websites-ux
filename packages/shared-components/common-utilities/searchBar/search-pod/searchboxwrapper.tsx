'use client'
import dynamic from "next/dynamic";
import SearchBar from "@packages/shared-components/skeleton/searchbar";
const SearchBox=dynamic(()=>import("./searchbox"),{ssr:false, loading:()=><SearchBar/>})
// import SearchBox from "./searchbox"
export default function Searchboxwrapper({universalSearchPanel,pgs_search_data}:any){
   return <SearchBox universalSearchPanel={universalSearchPanel} pgs_search_data={pgs_search_data}/>
}
