///<reference types="Cypress" />


describe('template suite', () => {


  beforeEach(() => {
    cy.login()
  })

  it('Verify 7 Tiles and dislay the names:', () => {
      
      cy.get('.oxd-topbar-header-breadcrumb .oxd-text').contains("Dashboard") 
      cy.get('.oxd-topbar-header-breadcrumb .oxd-text').should('have.text', "Dashboard")
      cy.log("VERIFYING DASHBOARD TEXT:   Bob")
      cy.get('.oxd-brand-banner > img')
      cy.get('.oxd-main-menu-item.active')   // verify Highlight the Dashboard
      
      //Verify 7 Tiles and dislay the names
      // An code:
      cy.get('.orangehrm-dashboard-widget-header .oxd-text.oxd-text--p').each((el, index) => {
        const myText = el.text()
        cy.log(myText + " :")
        cy.log(index + " :")
        cy.log("-------------")
        // if(myText == "Time at Work"){
        //     cy.log("Found: SboB: " + myText)
        // }
        
      })

      // Explicity assertion: All 7 titles are verified.
      cy.get('.orangehrm-dashboard-widget-header').find("p.oxd-text.oxd-text--p").then((el, index) => {
        expect(el.text())
        .include("Time at Work")
        .include("My Actions")
        .include("Quick Launch")
        .include("Buzz Latest Posts")
        .include("Employees on Leave Today")
        .include("Employee Distribution by Sub Unit")
        .include("Employee Distribution by Location")
       }) //  cy.get('. .. each

      // Verify Parent, Parents, ParentUntil and child by using the tags in <find>
      cy.get('.oxd-main-menu-item-wrapper').should('have.length', 12)
      cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').contains("Dashboard")
      cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').contains("Dashboard").parent() // <a.. active : Immediate parent FOUND
      cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').contains("Dashboard").parents().should('have.class', 'oxd-main-menu-item active') // pass
      //cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').contains("Dashboard").parents('.oxd-main-menu').should('have.class', 'oxd-main-menu-item active') //FAIL since mulitple loctrs
      //cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').contains("Dashboard").parents('.oxd-main-menu').last().should('have.class', 'oxd-main-menu-item active') //FAIL since last NOT work.
      cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').contains("Dashboard").parents('.oxd-main-menu').last().find('li a').should('have.class', 'oxd-main-menu-item active') //PASS grand child connection
      cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').contains("Dashboard").parents('ul.oxd-main-menu').find('li a').should('have.class', 'oxd-main-menu-item active') 
      cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').contains("Dashboard").parentsUntil('.oxd-main-menu')//.should('have.class', '.oxd-main-menu') // FAIL as not including parentsUntill level
      cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').contains("Dashboard").parents('.oxd-main-menu').last().find('li a').should('have.class', 'oxd-main-menu-item active')      
      console.log("End of the IT blockSSSTT")
    })    // END: it('Verify 7 Tiles and dislay the names:'

  it("Verify Left panel items 12 clicked after enter search box and verify title:", () => {
      cy.get('.oxd-sidepanel-body')
      cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').each((el1, index) => {
        const lPanelItems = el1.text()
        cy.get('input[placeholder="Search"]').type(lPanelItems)
        //cy.wait(200)
        cy.get('.oxd-main-menu-item-wrapper .oxd-text.oxd-text--span.oxd-main-menu-item--name').should('have.text', lPanelItems).click()
        

        if(lPanelItems == 'Maintenance'){
          cy.wait(500)
          cy.get('.oxd-button--ghost.orangehrm-admin-access-button').should('have.text', ' Cancel ') 
          cy.get('.oxd-button--ghost.orangehrm-admin-access-button').contains(' Cancel ')
          cy.get('.oxd-button--ghost.orangehrm-admin-access-button').click()
          cy.log("CANCEL BUTTON CLICKED...")
        } else {
          
          cy.get(".oxd-topbar-header-title").find(".oxd-topbar-header-breadcrumb").then(($p) => {
            const titleText = $p.text()
            cy.log(titleText)
            cy.log("==========")
            cy.log(lPanelItems)
            if(lPanelItems == "My Info"){
                expect(titleText)
                .include("PIM")
              } else {
                expect(titleText)
                .include(lPanelItems)
            }
          
          })

        }
        
      })
  })

  it.only('DEBUG <it> block:', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
      cy.get('.oxd-topbar-header-title')
      cy.get(".oxd-topbar-header-title").find(".oxd-topbar-header-breadcrumb").contains("Admin")
      cy.get(".oxd-topbar-header-title").find(".oxd-topbar-header-breadcrumb").then(($p) => {
        expect($p.text())
      .includes("Admin")
      cy.log($p.text())
      console.log($p.text())
    })

    //.then(($el, index) => {
    // cy.get(".oxd-topbar-header-breadcrumb").each(($el2, index) => {
          // const listItemsTitle = el.text()
          // cy.last(listItemsTitle)
          // cy.log("--------------")
      //  })
    cy.log("Dummy <it> block ")

  })


    
  })  //describe('template