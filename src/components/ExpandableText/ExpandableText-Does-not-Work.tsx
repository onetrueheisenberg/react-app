import { useState } from "react";

interface Props {
  maxChars: number;
}

const ExpandableText = ({ maxChars = 20 }: Props) => {
  const [show, setShow] = useState(true);
  let text1: string =
    'Vastoin yleistä uskomusta, Lorem Ipsum ei ole vain sattumanvarainen \
      teksti. Sillä on pitkät juuret klassisesta latinalaisesta kirjallisuudesta \
      vuonna 45 eKr alkaen, tehden siitä yli 2000 vuotta vanhan. Richard \
      McClintock, latinalainen professori Hampden-Sydneyn yliopistossa \
      Virginiassa, etsi yhden vaikeaselkoisimmista latinalaisista sanoista, \
      consectetur, Lorem Ipsumin kappaleesta ja etsi lainauksia sanasta \
      klassisessa kirjallisuudessa löytäen varman lähteen. Lorem Ipsum tulee \
      osista 1.10.32 ja 1.10.33 "de Finibus Bonorum et Malorum":ksesta (The \
      Extremes of Good and Evil), jonka teki Cicero vuonna 45 eKr. Tämä kirja on \
      tutkielma etiikasta, joka oli hyvin yleistä Renesanssin aikana. \
      Ensimmäinen Lorem Ipsumin rivi, "Lorem ipsum dolor sit amet..", tulee \
      rivistä joka on osassa 1.10.32.';
  let text2: string =
    '\
      Normaali palanen Lorem Ipsumia, jota on \
      käytetty 1500-luvulla on toistettu alla niille jotka ovat vain \
      kiinnostuneita. Osiot 1.10.32 ja 1.10.33 "de Finibus Bonorum et \
      Malorum":ksesta, Cicerolta, ovat myös toistettu niiden tarkoissa \
      alkuperäisissä muodoissaan, joita seuraa englantilaiset versiot vuodelta \
      1914, kääntäjänä H. Rackman.';
  let text3: string = "";
  if (maxChars > text1.length) {
    // setShow(true);
    text1 = text1;
    [text2, text3] = [
      text2.substring(0, text1.length + text2.length - maxChars),
      text2.substring(text1.length + text2.length - maxChars),
    ];
    [text1, text2] = [text1 + text2, text3];
  } else {
    // setShow(true);
    [text1, text3] = [text1.substring(0, maxChars), text1.substring(maxChars)];
    [text2, text3] = [text3, text2];
    [text1, text2] = [text1, text2 + text3];
  }
  return (
    <p>
      {text1}
      {show ? text2 : null}
      {show ? <button onClick={() => setShow(!show)}></button> : null}
    </p>
  );
};

export default ExpandableText;
