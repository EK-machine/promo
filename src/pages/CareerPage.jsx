import React, { useRef } from 'react';
import './careerpage.css';
import ProgressScrollBar from '../components/ProgressScrollBar';

function CareerPage() {
  const heightRef = useRef();

  const scrollHandler = () => {
    const one = document.documentElement.scrollTop;
    const two = document.scrollingElement.scrollTop;
    const three = document.body.scrollTop;
    const four = window.scrollY;
    const five = window.pageYOffset;
    const six = heightRef.current.scrollTop;
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
  };

  return (
    <div className="career__page" onClick={scrollHandler}>
      <div
        className="career__container"
        ref={heightRef}
        onScroll={scrollHandler}
      >
        <h1 className="career__title">My career</h1>
        <section className="career__content-section">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            dolores pariatur modi consectetur id ducimus voluptatem incidunt
            laudantium. Deserunt quod beatae molestias, doloribus maiores porro
            a. Consectetur, dignissimos alias! Eius! Incidunt impedit quos,
            deserunt amet ab ut dolor assumenda, magni facilis molestiae odit?
            Voluptatum voluptate illum aut quas reiciendis minus optio, tempore
            numquam praesentium at, dolor accusamus aliquam fugit nemo. Rem
            voluptate excepturi eveniet asperiores illum esse molestias nam eum
            omnis, blanditiis molestiae nesciunt, dolore, ut hic dolorem
            pariatur voluptatum vitae soluta tempore voluptatem mollitia quam.
            Voluptas quisquam error praesentium! Commodi molestiae error eum
            veritatis, vero esse, deserunt praesentium repellat perferendis,
            dolorem accusantium rem minus alias id ullam consequatur voluptates
            illo. Consectetur nostrum quam cupiditate voluptates unde, molestiae
            excepturi ipsa! Voluptatibus rem nulla saepe tempora. Quo quae
            voluptatum eveniet quis, facilis, exercitationem officiis cumque
            pariatur voluptas, sapiente aperiam fugit unde distinctio harum
            eligendi expedita ipsum ex temporibus vitae fugiat dicta! Omnis
            perferendis illum veritatis quidem quia quis, ex doloremque ullam.
            Quo aperiam voluptatem fugit laboriosam ex quod veritatis sapiente
            facilis quam! Ea ipsam ullam animi, asperiores reiciendis ratione
            quibusdam harum? Ex impedit illo tenetur quam molestiae, asperiores
            ullam voluptas nihil numquam mollitia. Iste totam, vitae molestias
            doloribus, sed repellat obcaecati quisquam minus explicabo vero unde
            debitis optio, placeat consequatur nam! Provident quia sunt
            doloremque excepturi? Maiores accusamus atque, asperiores dolores,
            dolorem enim sed repellendus mollitia nisi delectus, consequuntur id
            dignissimos? Voluptate numquam fugit consequuntur ut in, adipisci
            fugiat. Eum, cumque. Atque voluptatibus, consequatur exercitationem
            voluptatum tenetur numquam ad, animi rem similique dicta soluta
            earum tempore. Impedit laboriosam velit, voluptas nemo nisi suscipit
            dolores dicta. Aliquid consectetur dolore sequi iusto pariatur?
            Numquam optio, dolores mollitia animi qui perspiciatis
            necessitatibus eos quod. Asperiores nam id officia consectetur ad
            ratione ipsa qui vero amet quasi, non adipisci ex consequuntur
            accusantium ullam eos minus. Tempora, doloribus consectetur, odio
            eius similique enim optio amet, sapiente voluptas dolores aspernatur
            sunt minus. Est quisquam corporis, ullam harum consequuntur ut vero
            eum dolorum possimus ipsa, dolores debitis velit? Quasi optio
            placeat dolore error officiis ipsa, illum dolores fugiat ullam
            deleniti omnis esse minus sint libero necessitatibus quas modi
            sapiente quam quod, amet illo dolorem consectetur adipisci ipsum!
            Deserunt? Totam atque id explicabo libero voluptate obcaecati eaque
            odit, nemo, delectus magni fugit fuga, deserunt accusamus corrupti!
            Quo iure ad neque accusantium ullam? Consequatur mollitia nisi modi
            placeat praesentium illum. Quod consequuntur distinctio deleniti,
            asperiores maxime fugiat officiis beatae voluptate error, quasi,
            dicta harum voluptatum magni provident rem! Nisi minus sequi fugiat
            ad totam similique harum adipisci molestias maxime labore? Quis
            tenetur eveniet ipsa voluptas quidem ex natus expedita facilis ab
            asperiores voluptatum praesentium maiores recusandae architecto
            odio, odit quo impedit velit numquam soluta veritatis perspiciatis
            pariatur similique. Repudiandae, facere. Exercitationem explicabo
            magni, ducimus nam dolore ipsa dignissimos inventore pariatur
            quisquam deleniti sunt illum reiciendis voluptas hic ea qui dolor
            odio perspiciatis sint voluptatum. Est suscipit doloremque aliquam
            animi ipsum! Earum quos corporis veritatis tempora consequuntur
            doloremque animi similique corrupti eaque. Magnam minus fugit soluta
            cupiditate officia enim quos, quia, asperiores ipsam maxime modi
            tempora. Esse maiores molestias eaque. Nemo? Itaque obcaecati
            explicabo facere quod tempora, aut aliquid nostrum eius enim minus
            quia nulla optio deserunt dignissimos similique repellendus pariatur
            illum incidunt cum quis reiciendis laboriosam. Quisquam maiores
            tenetur odit. Quisquam nihil ex eum deserunt voluptatem unde
            laboriosam architecto dolor id provident cupiditate, numquam
            suscipit hic perferendis, facilis nam enim. Aperiam quos laboriosam
            at error fugiat. Sint debitis dolor accusantium. Aliquam hic facilis
            maxime soluta autem dolores corrupti animi, quis suscipit? Dolor
            voluptatibus sed ut soluta perferendis, ipsum praesentium harum
            nesciunt reprehenderit, impedit debitis! Mollitia, cum. Laborum aut
            veritatis iste? Minima numquam aliquid perferendis eaque expedita,
            reiciendis earum nobis? Ipsa debitis deserunt nam ea voluptatem
            accusantium expedita in iusto nulla officiis laborum reiciendis
            pariatur dolore numquam, aperiam reprehenderit similique vel?
            Explicabo inventore delectus iure dolorem quos laudantium qui
            debitis obcaecati possimus similique cum placeat deserunt, aliquam
            illo repudiandae numquam eos sit nobis pariatur labore voluptate
            facere quis quas libero. Dolorum? Quasi, quibusdam! Quis
            consequuntur commodi iure tenetur rem! Omnis vel perspiciatis itaque
            ad, eum dolorum minus alias placeat reiciendis fuga cupiditate,
            recusandae perferendis? Maxime earum ea, sequi velit alias illum.
            Excepturi magnam, aliquid recusandae laudantium facilis dolorum
            numquam id quae ullam sed neque, vitae quasi odio fugiat laborum
            debitis tenetur dicta eligendi beatae non, velit dolor. Ad autem
            necessitatibus repellat. Earum eum dolore, reiciendis veniam quas
            omnis culpa maiores maxime perferendis, aspernatur optio repellat
            assumenda, aperiam sunt ducimus atque dolores. Consectetur sed
            repudiandae quidem, libero placeat quae aut eos inventore. Pariatur
            incidunt esse assumenda consequuntur repudiandae est reiciendis. Vel
            molestiae aspernatur laboriosam fugit labore, temporibus mollitia
            odit earum ipsum sint in saepe atque vitae porro quasi architecto
            adipisci quidem. Hic! Autem perferendis possimus, rem atque quidem
            expedita at, eveniet est, sequi veritatis quas. Incidunt rerum
            repudiandae ad est dolores accusantium ipsa esse facere perspiciatis
            beatae, reiciendis eligendi laudantium quae blanditiis! Vitae totam
            beatae excepturi! Soluta hic id aperiam, minus ut temporibus veniam
            quis odio sit perferendis. Molestias, accusamus. Similique
            obcaecati, voluptatibus officia pariatur temporibus ipsam incidunt
            animi. Repellat, exercitationem officiis. Ratione libero dolores
            iusto recusandae! Non, tempora? Nemo possimus recusandae harum,
            laudantium illo praesentium itaque cupiditate quibusdam non id,
            laboriosam vitae voluptate libero in sequi quae hic quam deserunt
            pariatur. Ipsa numquam explicabo quasi autem quam ratione laboriosam
            repellat nemo! Pariatur a vitae doloremque rem, provident deleniti
            impedit. Deserunt perspiciatis perferendis quae ipsam obcaecati,
            iusto aliquam alias fugit voluptatibus qui. Ut, quo non aliquam
            ipsum, eaque culpa cum molestiae laboriosam sequi eveniet voluptas
            aliquid nam maiores hic repudiandae provident et nobis accusantium
            excepturi? Est voluptas neque, blanditiis eligendi porro
            exercitationem. Odio repellat corporis modi, veritatis debitis
            obcaecati placeat voluptate quaerat sed voluptates necessitatibus
            explicabo labore quidem minus soluta perferendis nihil blanditiis
            culpa et libero rem voluptatum? Perspiciatis esse fuga commodi!
            Minus doloribus iure qui voluptatum soluta totam molestiae placeat
            necessitatibus perspiciatis in dignissimos dicta quae vitae quos,
            assumenda amet aliquam dolores harum natus, saepe alias a. Nostrum,
            tempora. Quasi, deleniti. Eligendi cum dicta similique unde
            voluptatum veritatis omnis deserunt molestias ullam, voluptatem
            dolores quasi voluptates quaerat repellendus dolorem porro deleniti
            quae inventore itaque? Vitae rerum dolor sapiente nam! Molestiae,
            maxime? Amet, repellat voluptatibus? Maxime cum adipisci fugit
            fugiat aperiam laboriosam nulla perspiciatis debitis alias soluta
            aspernatur possimus veniam laudantium vitae at excepturi magnam non,
            eveniet ullam error culpa! Adipisci, labore? Maxime deserunt esse
            qui est. In qui laborum cupiditate? Ratione doloremque incidunt ad
            fuga, recusandae consequatur dolorum veniam, et, quisquam tempore ab
            esse doloribus cumque non ipsum in id iste? Repellendus minima
            maxime quis ea itaque, officiis distinctio atque. Maxime harum
            molestias libero veritatis autem vitae voluptatem! Beatae facilis
            harum dolores deserunt omnis aut cupiditate porro id, eveniet
            officia reprehenderit? Adipisci, nam non minima officia eveniet ex?
            Adipisci suscipit quisquam molestiae hic repudiandae laboriosam
            itaque natus eligendi cupiditate distinctio numquam, dolorum
            possimus rem esse ab officia! Quia accusamus enim reprehenderit.
            Corporis officiis ab odio, est illum rerum consequuntur dolores
            deleniti consequatur repudiandae? Accusantium dolores velit harum
            commodi doloribus porro quae, aut error distinctio numquam
            praesentium odit debitis inventore non recusandae? Quos beatae sed
            culpa reiciendis architecto laudantium magnam consequuntur cumque
            hic! Pariatur explicabo minus libero, officiis eos soluta vel illo
            laborum eum maiores, aliquam porro dolorem quis. Alias, odio nisi.
            Eaque iste doloribus quod? Fugiat culpa, nesciunt aliquam velit
            saepe tempore laborum quidem consectetur non, optio eveniet ipsum.
            Corporis nam accusamus laboriosam soluta accusantium praesentium,
            dicta vero quis non id! Dolorum obcaecati quod eius sint aperiam
            quasi, cumque tempore quis voluptatum error perferendis eos amet ea
            dolor asperiores molestias eum, facilis, voluptatem pariatur
            recusandae ipsam repellat ut provident. Repellat, hic. Doloremque
            nihil dolore id consectetur autem laudantium! Soluta odit velit
            explicabo, corrupti id dignissimos reiciendis quasi dolor corporis
            fugiat facere dolores eum esse nisi praesentium quam a sit error
            ipsum. Unde dolorum quod perferendis deleniti totam similique a
            recusandae, non sunt! Eaque, accusamus voluptate illo est ipsa
            tempora! Laboriosam, deserunt ipsam. Quo alias ipsa doloremque atque
            adipisci autem eligendi cum. Aut consequuntur ut culpa voluptatem
            illo porro id expedita quia magnam nulla totam recusandae quaerat
            sunt ducimus possimus eveniet aliquid, architecto provident dolores
            dolor, iste officia. Qui at asperiores natus! Tenetur debitis
            temporibus odio natus amet. Exercitationem totam suscipit voluptas
            illo nisi numquam minus eum vel tenetur, reiciendis maiores harum.
            Culpa necessitatibus dolorum quia modi totam maiores neque
            voluptates? Fuga. Ab reprehenderit facere distinctio nisi minus a
            natus deserunt vel eius ullam aperiam tempora illum quo iure, odio
            sint molestias placeat laborum delectus exercitationem porro aut in?
            Quo, ipsam aliquam! Delectus accusantium porro sed voluptate eius,
            mollitia nisi tenetur quisquam voluptas dolor veritatis minus
            reiciendis autem nostrum commodi, nam ducimus odio unde earum
            assumenda vel soluta eveniet ullam quo! Magnam! Consequuntur ratione
            numquam dolorum, voluptatibus asperiores, quasi ullam fuga itaque
            excepturi facere ducimus iste. Aperiam facere ex reiciendis ab quae
            quaerat provident fugit dicta? Voluptate minus tenetur nihil nobis
            adipisci. Sunt animi commodi fugiat exercitationem quo adipisci, aut
            id veniam quos omnis est repudiandae illo facere nihil perferendis
            veritatis alias minus nobis mollitia voluptatem, itaque, eos aliquam
            deleniti. Perspiciatis, ipsam.
          </p>
        </section>
        <section className="career__scroll-section">
          <ProgressScrollBar />
        </section>
      </div>
    </div>
  );
}

export default CareerPage;
