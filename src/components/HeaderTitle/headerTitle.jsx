function HeaderTitle({ title, subTitle }) {
    return (
        <div className="content-header">
            <div className="container">
                <div className="row mb-2">
                    <div className="col-sm-12">
                        <h1 className="m-0 text-dark"> {title} <small>( {subTitle} )</small></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTitle;