interface pageProps {
    params: {pt:string}
}
export default function Product({params}) {

    return(
        <div>
            Post: {params.pt}
        </div>
    )
}