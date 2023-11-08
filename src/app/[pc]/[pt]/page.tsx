interface pageProps {
    params: {pt:string}
}
export default function Product({params}:pageProps) {

    return(
        <div>
            Post: {params.pt}
        </div>
    )
}