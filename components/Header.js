import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row">
            <a className="py-4 px-4 font-bold text-3xl text-blue-600" href="https://floral-cell-6073.on.fleek.co/">Coinante</a>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
    )
}