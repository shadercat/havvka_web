import axios from 'axios'

export const login = organization => {
    return axios
    .post('organizations/login', {
        organization_email: organization.organization_email,
        organization_password: organization.organization_password
    })
    .then(res => {
        localStorage.setItem('orgtoken', res.data)
        console.log(res.data)
        return res.data
    })
    .catch(err => {
        console.log(err);
    })
}

export const register = newOrganization => {
    return axios
    .post('organization/register', {
      organization_name: newOrganization.organization_name,
        organization_location: newOrganization.organization_location,
        organization_email: newOrganization.organization_email,
        organization_password: newOrganization.organization_password
    })
    .then(res => {
        console.log('registered')
    })
}
