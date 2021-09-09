/// <reference types="cypress" />

describe('Reqres API testing', () => {
    it('Get users', () => {
        cy.request("GET", 'https://reqres.in/api/users?page=1').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.total).to.eq(12);
        });
    })

    it('Get user', () => {
        cy.request("GET", 'https://reqres.in/api/users/1').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.id).to.eq(1);
            expect(response.body.data.first_name).to.eq('George');
        });
    })

    it('Create user', () => {
        const name = "Alex"
        const job = "Manager"
        cy.request("POST", 'https://reqres.in/api/users', {
            name: name,
            job: job
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq(name);
            expect(response.body.job).to.eq(job);
        });
    })
})
