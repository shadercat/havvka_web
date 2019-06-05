import axios from 'axios'

export const register = newOrganization => {
    return axios
    .post('organizations/register', {
        organization_email: newOrganization.organization_email,
        organization_password: newOrganization.organization_password,
        organization_name: newOrganization.organization_name,
        organization_location: newOrganization.organization_location
    })
    .then(res => {
      return res.data;
    })
}

export const login = organization => {
    return axios
    .post('organizations/login', {
        organization_email: organization.organization_email,
        organization_password: organization.organization_password
    })
    .then(res => {
        localStorage.setItem('organizationtoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err);
    })
}
