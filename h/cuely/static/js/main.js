$(function () {
    const TIMEOUT = 4000;
    const defaultCards = [
        { 
            inputText: 'sales objections faq',
            logo: [
              'atlassian.com',
              'gsuite.google.com'
            ],
            byMeta: [
              '(Creator)',
              '(Co-author)' 
            ],
            byOwner: [
              'Jan Gnezda',
              'Jakob Marovt'
            ],
            link: [
              'Confluence',
              'Drive'
            ],
            answerTitleList: [
              'Page: <span class="highlight">Sales Objections</span> and how to answer them',
              'Doc: Common <span class="highlight">sales objections</span> answers <span class="highlight">FAQ</span>'
            ],
            answerBodyList: [
              'Last modified: 23 hours ago',
              'Last modified: 8 days ago'
            ]
        },
        { 
            inputText: 'Jake Smith',
            logo: [
              'gsuite.google.com',
              'pipedrive.com'
            ],
            byMeta: [
              '(Creator)',
              '(Assigned to)'
            ],
            byOwner: [
              '<span class="highlight">Jake Smith</span>',
              '<span class="highlight">Jake Smith</span>'
            ],
            link: [
              'Drive',
              'Pipedrive'
            ],
            answerTitleList: [
              'Doc: New proposal doc template',
              'Deal: Mega Corp Services'
            ],
            answerBodyList: [
              'Last modified: 1 hour ago',
              'Stage: Contract sent<br>Value: $4.500<br>Last activity: 1 hour ago via email'
            ] 
        },
        { 
            inputText: 'recent deals',
            logo: [
              'pipedrive.com',
              'pipedrive.com'
            ],
            byMeta: [
              '(Assigned to)',
              '(Assigned to)'
            ],
            byOwner: [
              'Jakob Marovt',
              'Jakob Marovt'
            ],
            link: [
              '<span class="highlight">Pipedrive</span>',
              '<span class="highlight">Pipedrive</span>'
            ],
            answerTitleList: [
              '<span class="highlight">Deal</span>: SEO Optimization',
              '<span class="highlight">Deal</span>: Facebook campaign'
            ],
            answerBodyList: [
              'Stage: Closed\nValue: $2.500<br>Deal closed: 1 day ago',
              'Stage: Closed\nValue: $7.500<br>Deal closed: 3 days ago'
            ] 
        },
        { 
            inputText: 'trello active mary peg',
            logo: [
              'trello.com',
              'trello.com'
            ],
            byMeta: [
              '(Assigned to)',
              '(Assigned to)'
            ],
            byOwner: [
              '<span class="highlight">Mary Peg</span>sworth',
              '<span class="highlight">Mary Peg</span>sworth'
            ],
            link: [
              '<span class="highlight">Trello</span>',
              '<span class="highlight">Trello</span>'
            ],
            answerTitleList: [
              'Card: New onboarding flow',
              'Card: Critical bugs'
            ],
            answerBodyList: [
              'List: Engineering/Doing<br>Checklist: 8/10 (80%)<br>Last change: 1 hour ago',
              'List: Engineering/Doing<br>Checklist: 6/10 (60%)<br>Last change: 1 day ago'
            ] 
        },
        { 
            inputText: 'Jakob opportunities',
            logo: [
              'salesforce.com',
              'salesforce.com'
            ],
            byMeta: [
              '(Owner)',
              '(Owner)'
            ],
            byOwner: [
              '<span class="highlight">Jakob</span> Marovt',
              '<span class="highlight">Jakob</span> Marovt'
            ],
            link: [
              '<span class="highlight">Salesforce</span>',
              '<span class="highlight">Salesforce</span>'
            ],
            answerTitleList: [
              '<span class="highlight">Opportunity</span>: Dixie deal',
              '<span class="highlight">Opportunity</span>: Monstering deal'
            ],
            answerBodyList: [
              'Stage: Contract sent<br>Value: $6.000<br>Last Contacted: 3 days ago via phone',
              'Stage: Demo done<br>Value: $13.000<br>Last Contacted: 5 days ago via email'
            ] 
        },
        { 
            inputText: 'helpscout open tickets',
            logo: [
              'helpscout.net',
              'helpscout.net'
            ],
            byMeta: [
              '(Assigned to)',
              '(Assigned to)'
            ],
            byOwner: [
              'Jakob Marovt',
              'Jakob Marovt'
            ],
            link: [
              '<span class="highlight">Helpscout</span>',
              '<span class="highlight">Helpscout</span>'
            ],
            answerTitleList: [
              '<span class="highlight">Ticket</span>: Cant get refund',
              '<span class="highlight">Ticket</span>: Payment doesnt go through'
            ],
            answerBodyList: [
              'Status: Open<br>Last contacted: 1 hour ago',
              'Status: Open<br>Last contacted: 3 hours ago'
            ] 
        },
        { 
            inputText: 'onboarding',
            logo: [
              'atlassian.com',
              'gsuite.google.com'
            ],
            byMeta: [
              '(Author)',
              '(Creator)'
            ],
            byOwner: [
              'John Appleseed',
              'Sarah Bird'
            ],
            link: [
              'Confluence',
              'Docs'
            ],
            answerTitleList: [
              'Page: <span class="highlight">Onboarding</span> of new employees',
              'Doc: Interesting <span class="highlight">onboarding</span> links - marketing'
            ],
            answerBodyList: [
              'Last modified: 8 days ago',
              'Last modified: 2 months ago'
            ] 
        },
        { 
            inputText: 'open issues',
            logo: [
              'github.com',
              'github.com'
            ],
            byMeta: [
              '(Assignee)',
              '(Assignee)'
            ],
            byOwner: [
              'Emma Norwich',
              'Jim Pegworth'
            ],
            link: [
              '<span class="highlight">Github</span>',
              '<span class="highlight">Github</span>'
            ],
            answerTitleList: [
              '<span class="highlight">Issue</span>: Modals don\'t work in Safari',
              '<span class="highlight">Issue</span>: Feature flag clog is broken'
            ],
            answerBodyList: [
              'Last activity: 3 hours ago<br>Milestone: Priority Bugs',
              'Last activity: never<br>Milestone: /'
            ] 
        }
    ];
    const input = document.querySelector('.illustration__input');
    const element = document.querySelector('.illustration__card');
    const answer = document.querySelectorAll('.illustration__answer');
    const answer_inner_title = document.querySelectorAll('.illustration__answer__inner-title');
    const answer_inner_body = document.querySelectorAll('.illustration__answer__inner-body');
    const answer_logo = document.querySelectorAll('.illustration__answer__logo');
    const answer_link = document.querySelectorAll('.illustration__meta-action');
    const by = document.querySelectorAll('.illustration__meta-by');
    let cards = Object.assign([], defaultCards);
  
    // element.removeEventListener('transitionend', removeClass);
    // element.addEventListener('transitionend', removeClass);

    if (element) {
        next();
    }

    function next () {
        const card = cards.shift();

        let clearer = setTimeout(function () {
            $('.illustration__input').teletype( {
            text: [card.inputText],
            typeDelay: 70,
            backDelay: 70,
            delay: 2500,
            loop: 1,
            humanise: false,
            prefix: ''
            } );
            
            setTimeout(function () {         
                for (let i = 0; i < answer.length; ++i) {
                  answer_inner_title[i].innerHTML = card.answerTitleList[i];
                  answer_inner_body[i].innerHTML = card.answerBodyList[i];
                  answer[i].style.display = "flex";
                  if (card.logo[i]){
                    answer_logo[i].src = "//logo.clearbit.com/" + card.logo[i];
                  }
                  answer_link[i].innerHTML = "Open in " + card.link[i];

                  const byOwner = "<span class='illustration__meta-by-title'>" + card.byOwner[i] + "</span>";
                  const byMeta = "<span class='illustration__meta-by-meta'>&nbsp;" + card.byMeta[i] + "</span>";
                  by[i].innerHTML = byOwner + byMeta;
                  if (i >= card.answerTitleList.length )
                    answer[i].style.display = "none";
                }

                element.classList.add('show');
                if (!cards.length) {
                    cards = Object.assign([], defaultCards);
                }
                setTimeout(() => {
                    input.value = '';
                    element.classList.remove('show');
                    next();
                }, 3500);
            }, 1300);
        }, 1000);
    }
    
    function removeClass (event) {
        event.target.classList.remove('show');
    }
});
