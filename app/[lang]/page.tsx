import Image from "next/image"; 

export default function HomeLang({params} : {params: {lang: string}}) {
   return (
    <div>
      {params.lang}
    </div>
  );
}
