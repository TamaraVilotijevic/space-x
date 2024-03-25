import './company.css';

const Company = ({companyInfo}) => {
    return <>
    <div className='company-wrapper'>
        <div>
          <h3>About {companyInfo.name}</h3>
          <p>Founded by {companyInfo.founder} in {companyInfo.founded}</p>
          <p>Employees: {companyInfo.employees}</p>
          <p>Valued at {companyInfo.valuation} USD</p>
          <p>{companyInfo.vehicles} vehicles</p>
          <p>{companyInfo.launch_sites} launch sites</p>
          <p>{companyInfo.test_sites} test sites</p>
        </div>
        <div>
          <h3>Headquarters</h3>
          <p>{companyInfo.headquarters.address},</p>
          <p>{companyInfo.headquarters.city}, {companyInfo.headquarters.state}</p>
        </div>
        <div>
          <h3>Social media</h3>
          <a href={companyInfo.links.website} target='_blank'>Website</a>
          <a href={companyInfo.links.flickr} target='_blank'>Flickr</a>
          <a href={companyInfo.links.twitter} target='_blank'>Twitter</a>
          <a href={companyInfo.links.elon_twitter} target='_blank'>Elon Musk Twitter</a>
        </div>
    </div>
    <p className='summary'>{companyInfo.summary}</p>
    </>;
};

export default Company;