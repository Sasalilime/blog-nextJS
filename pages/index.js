import Link from 'next/link';

export default function Home() {
    return (
        <div className="container px-4 pt-5">
            <h1> Bienvenue sur Code !</h1>
            <span>Le blog des développeurs...</span>
            <div className="row mt-5">
                <div className="col-12 col-sm-6" style={{minHeight:'200px'}}>
                    <div className="card w-100 h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                Consultez nos articles
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Améliorez vos connaissances en développement.
                            </h6>
                            <p className="text">Nos auteurs essaient de vulgarisez les concepts les plus difficiles.</p>
                            <Link href="/blog" >
                                <a className="text-decoration-none ">Visitez notre blog</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6" style={{minHeight:'200px'}}>
                    <div className="card w-100 h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                Qui sont nos membres ?
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Discutez avec nos développeurs
                            </h6>
                            <p className="text">Rencontrez nos membres.</p>
                            <Link href="/users">
                                <a className="text-decoration-none ">Découvrez nos membres.</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
