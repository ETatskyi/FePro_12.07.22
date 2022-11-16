import './styles.css';
import Link from '../../shared/Link'
import Img from '../../shared/Image'

const User = ({ name, phone, website, company }) => (
  <div className="card">
    <Img
      src={"http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16"}
      alt={""}
    />
    <div className="user-info-container">
      <p className="real-name">{name}</p>
      <p className="company-name">{company.name}</p>
      <p className="phone">phone: {phone}</p>
      <p className="website">website:
        <Link
          href={"https://" + website}
          text={website}
        />
      </p>
    </div>
  </div>
)

export default User;
