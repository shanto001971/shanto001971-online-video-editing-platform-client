

const Tabs = () => {
    return (


        <section id="wrapper">
            <div class="content">

                <div class="tabs">
                    <button class="tablinks active" data-country="London"><p data-title="London">London</p></button>
                    <button class="tablinks" data-country="Paris"><p data-title="Paris">Paris</p></button>
                    <button class="tablinks" data-country="Barcelona"><p data-title="Barcelona">Barcelona</p></button>
                    <button class="tablinks" data-country="Madrid"><p data-title="Madrid">Madrid</p></button>
                </div>


                <div class="wrapper_tabcontent">
                    <div id="London" class="tabcontent active">
                        <h3>London</h3>
                        <p>London is the capital of Great Britain. It is one of the greatest cities in the world. It is an important business and financial centre. It is an intellectual centre, too. Everywhere in London, there are open spaces: Hyde Park and Regent Park are the largest. The City is the oldest part of London. </p>
                    </div>

                    <div id="Paris" class="tabcontent">
                        <h3>Paris</h3>
                        <p>Paris is in the Paris department of the Paris-Isle-of-France region The French historic, political and economic capital, with a population of only 2.5 million is located in the northern part of France. One of the most beautiful cities in the world. Home to historical monuments such as Notre Dame, the Eiffel tower (320m), Bastille, Louvre and many more. </p>
                    </div>

                    <div id="Barcelona" class="tabcontent">
                        <h3>Barcelona</h3>
                        <p>Barcelona has been an urban laboratory since the high Medieval Ages. A place of diversity, a backdrop for a multiplicity of social and cultural processes on multiple scales that reflect different ways of constructing the future, a city with a long experience of urban life and social innovations. </p>
                    </div>

                    <div id="Madrid" class="tabcontent">
                        <h3>Madrid</h3>
                        <p>Madrid is in the middle of Spain, in the Community of Madrid. The Community is a large area that includes the city as well as small towns and villages outside the city. 7 million people live in the Community. More than 3 million live in the city itself.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tabs;