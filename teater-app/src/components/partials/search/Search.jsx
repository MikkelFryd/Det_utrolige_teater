import Style from './search.module.scss'

export const Search = () => {

    return (
        <div className={Style.searchcontainer}>
            <input type="text" placeholder="INDTAST SØGEORD" />
            <button />
        </div>
    )
}