import MainLayout from '@/layout/MainLayout'
import { CncBancadaInclinadaHerramientaVivaPage } from '@/pages/CncBancadaInclinadaHerramientaVivaPage'
import { CncBancadaInclinadaPage } from '@/pages/CncBancadaInclinadaPage'
import { CncBancadaPlanaPage } from '@/pages/CncBancadaPlanaPage'
import { CentrosMaquinadoVerticalesPage } from '@/pages/CentrosMaquinadoVerticalesPage'
import { SierraCintaHorizontalPage } from '@/pages/SierraCintaHorizontalPage'
import { SierraCintaHorizontalVerticalPage } from '@/pages/SierraCintaHorizontalVerticalPage'
import { SierraColumnaPage } from '@/pages/SierraColumnaPage'
import { DeColumnaPage } from '@/pages/DeColumnaPage'
import { SierraDiscoPage } from '@/pages/SierraDiscoPage'
import { EscoplosFresadorasPage } from '@/pages/EscoplosFresadorasPage'
import { EscoplosVerticalesPage } from '@/pages/EscoplosVerticalesPage'
import { FresadoresPage } from '@/pages/FresadoresPage'
import { GeneradoraEngranesPage } from '@/pages/GeneradoraEngranesPage'
import { HomePage } from '@/pages/HomePage'
import { LaminadoraCuerdasPage } from '@/pages/LaminadoraCuerdasPage'
import { RadialesPage } from '@/pages/RadialesPage'
import { TornosChicosPage } from '@/pages/TornosChicosPage'
import { TornosGrandesPage } from '@/pages/TornosGrandesPage'
import { TornosPetrolerosPage } from '@/pages/TornosPetrolerosPage'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { SucursalesPage } from '@/pages/SucursalesPage'
import { CheckOutPage } from '@/pages/CheckOutPage'
import { FresadoraVerticalPage } from '@/pages/FresadoraVerticalPage'
import { FresadoraVerticalHorizontalPage } from '@/pages/FresadoraVerticalHorizontalPage'
import { FresadorasUniversalesPage } from '@/pages/FresadorasUniversalesPage'
import { FresadorasCncPage } from '@/pages/FresadorasCncPage'
import { RectificadorasSuperficiesPlanasPage } from '@/pages/RectificadorasSuperficiesPlanasPage'
import { RectificadorasCilindricasPage } from '@/pages/RectificadorasCilindricasPage'
import { CizallasMecanicasPage } from '@/pages/CizallasMecanicasPage'
import { CizallasHidraulicasPage } from '@/pages/CizallasHidraulicasPage'
import { DobladorasMecanicasPage } from '@/pages/DobladorasMecanicasPage'
import { DobladorasHidraulicasPage } from '@/pages/DobladorasHidraulicasPage'
import { DobladorasDeTuboPage } from '@/pages/DobladorasDeTuboPage'
import { MetalerosHidraulicosPage } from '@/pages/MetalerosHidraulicosPage'
import { RoladorasDePerfilesPage } from '@/pages/RoladorasDePerfilesPage'
import { RoladorasDePlacaPage } from '@/pages/RoladorasDePlacaPage'
import { CortadorasLaserPage } from '@/pages/CortadorasLaserPage'
import { CortadorasDeTuboPage } from '@/pages/CortadorasDeTuboPage'
import { GrabadorasLaserPage } from '@/pages/GrabadorasLaserPage'
import { MaquinasManualesLaserPage } from '@/pages/MaquinasManualesLaserPage'
import { MontacargasGasGasolinaPage } from '@/pages/MontacargasGasGasolinaPage'
import { MontacargasDieselPage } from '@/pages/MontacargasDieselPage'
import { MontacargasElectricosPage } from '@/pages/MontacargasElectricosPage'
import { GruasArticuladasTipoHiabPage } from '@/pages/GruasArticuladasTipoHiabPage'
import { HerramientasAccesoriosPage } from '@/pages/HerramientasAccesoriosPage'
import { HerramientasMedicionPage } from '@/pages/HerramientasMedicionPage'
import { HerramientasCarburoPage } from '@/pages/HerramientasCarburoPage'
import { HerramientasSujecionPage } from '@/pages/HerramientasSujecionPage'
import { HerramientasCortePage } from '@/pages/HerramientasCortePage'
import { ManejoDeMaterialesPage } from '@/pages/ManejoDeMaterialesPage'
import { TornosChicosSeminuevosPage } from '@/pages/TornosChicosSeminuevosPage'
import { TornosGrandesSeminuevosPage } from '@/pages/TornosGrandesSeminuevosPage'
import { FresadorasSeminuevosPage } from '@/pages/FresadorasSeminuevosPage'
import { CizallasSeminuevosPage } from '@/pages/CizallasSeminuevosPage'
import { RectificadorasSeminuevosPage } from '@/pages/RectificadorasSeminuevosPage'
import { TaladrosSeminuevosPage } from '@/pages/TaladrosSeminuevosPage'
import { DobladorasSeminuevasPage } from '@/pages/DobladorasSeminuevasPage'
import { TroqueladorasSeminuevosPage } from '@/pages/TroqueladorasSeminuevosPage'
import { MontacargasSeminuevosPage } from '@/pages/MontacargasSeminuevosPage'
import { GeneradorasDeEngranesSeminuevosPage } from '@/pages/GeneradorasDeEngranesSeminuevosPage'
import { SierraDeCintaSeminuevosPage } from '@/pages/SierraDeCintaSeminuevosPage'
import { SierrasDeDiscoSeminuevosPage } from '@/pages/SierrasDeDiscoSeminuevosPage'
import { NosotrosPage } from '@/pages/NosotrosPage'

export const MyRouter = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="nosotros" element={<NosotrosPage />} />
                <Route path="sucursales" element={<SucursalesPage />} />
                <Route path="checkout" element={<CheckOutPage />} />
                
                {/** routes para menu maquinaria */}
                <Route path="tornos-chicos" element={<TornosChicosPage />} />
                <Route path="tornos-grandes" element={<TornosGrandesPage />} />
                <Route path="tornos-petroleros" element={<TornosPetrolerosPage />} />
                <Route path="escoplos-verticales" element={<EscoplosVerticalesPage />} />
                <Route path="escoplos-para-fresadoras" element={<EscoplosFresadorasPage />} />
                <Route path="tornos-cnc-bancada-plana" element={<CncBancadaPlanaPage />} />
                <Route path="tornos-cnc-bancada-inclinada" element={<CncBancadaInclinadaPage />} />
                <Route path="tornos-cnc-bancada-inclinada-con-herramienta-viva" element={<CncBancadaInclinadaHerramientaVivaPage />} />
                <Route path="taladros-radiales" element={<RadialesPage />} />
                <Route path="taladros-fresadores" element={<FresadoresPage />} />
                <Route path="taladros-de-columna" element={<DeColumnaPage />} />
                <Route path="centros-de-maquinado-verticales" element={<CentrosMaquinadoVerticalesPage />} />
                <Route path="sierras-cinta-horizontal" element={<SierraCintaHorizontalPage />} />
                <Route path="sierras-cinta-horizontal-vertical" element={<SierraCintaHorizontalVerticalPage />} />
                <Route path="sierras-de-columna" element={<SierraColumnaPage />} />
                <Route path="sierras-de-disco" element={<SierraDiscoPage />} />
                <Route path="fresadoras-vertical" element={<FresadoraVerticalPage />} />
                <Route path="fresadoras-horizontal-vertical" element={<FresadoraVerticalHorizontalPage />} />
                <Route path="fresadoras-universales" element={<FresadorasUniversalesPage />} />
                <Route path="fresadoras-cnc" element={<FresadorasCncPage />} />
                <Route path="rectificadoras-superficies-planas" element={<RectificadorasSuperficiesPlanasPage />} />
                <Route path="rectificadoras-cilindricas" element={<RectificadorasCilindricasPage />} />
                <Route path="generadora-de-engranes" element={<GeneradoraEngranesPage/>} />
                <Route path="laminadora-de-cuerdas" element={<LaminadoraCuerdasPage />} />

                {/** routes para menu lámina */}
                <Route path="cizallas-mecanicas" element={<CizallasMecanicasPage />} />
                <Route path="cizallas-hidraulicas" element={<CizallasHidraulicasPage />} />
                <Route path="dobladoras-mecanicas" element={<DobladorasMecanicasPage />} />
                <Route path="dobladoras-hidraulicas" element={<DobladorasHidraulicasPage />} />
                <Route path="dobladoras-de-tubo" element={<DobladorasDeTuboPage />} />
                <Route path="metaleros-hidraulicos" element={<MetalerosHidraulicosPage />} />
                <Route path="roladoras-de-perfiles" element={<RoladorasDePerfilesPage />} />
                <Route path="roladoras-de-placa" element={<RoladorasDePlacaPage />} />

                {/** routes para menu máquinas láser */}
                <Route path="cortadoras-laser" element={<CortadorasLaserPage />} />
                <Route path="cortadoras-de-tubo" element={<CortadorasDeTuboPage />} />
                <Route path="grabadoras-laser" element={<GrabadorasLaserPage />} />
                <Route path="maquinas-manuales-laser" element={<MaquinasManualesLaserPage />} />

                {/** routes para menu manejo de materiales */}
                <Route path="montacargas-gas-gasolina" element={<MontacargasGasGasolinaPage />} />
                <Route path="montacargas-diesel" element={<MontacargasDieselPage />} />
                <Route path="montacargas-electricos" element={<MontacargasElectricosPage />} />
                <Route path="gruas-articuladas-tipo-hiab" element={<GruasArticuladasTipoHiabPage />} />

                {/** routes para menu herramientas */}
                <Route path="herramientas-accesorios" element={<HerramientasAccesoriosPage />} />
                <Route path="herramientas-medicion" element={<HerramientasMedicionPage />} />
                <Route path="herramientas-carburo" element={<HerramientasCarburoPage />} />
                <Route path="herramientas-sujecion" element={<HerramientasSujecionPage />} />
                <Route path="herramientas-corte" element={<HerramientasCortePage />} />
                <Route path="manejo-de-materiales" element={<ManejoDeMaterialesPage />} />

                {/** routes para menu seminuevos */}
                <Route path="tornos-chicos-seminuevos" element={<TornosChicosSeminuevosPage />} />
                <Route path="tornos-grandes-seminuevos" element={<TornosGrandesSeminuevosPage />} />
                <Route path="sierras-de-cinta-seminuevos" element={<SierraDeCintaSeminuevosPage />} />
                <Route path="sierras-de-disco-seminuevos" element={<SierrasDeDiscoSeminuevosPage />} />
                <Route path="fresadoras-seminuevos" element={<FresadorasSeminuevosPage />} />
                <Route path="rectificadoras-seminuevos" element={<RectificadorasSeminuevosPage />} />
                <Route path="cizallas-seminuevos" element={<CizallasSeminuevosPage />} />
                <Route path="taladros-seminuevos" element={<TaladrosSeminuevosPage />} />
                <Route path="dobladoras-seminuevos" element={<DobladorasSeminuevasPage />} />
                <Route path="troqueladoras-seminuevos" element={<TroqueladorasSeminuevosPage />} />
                <Route path="montacargas-seminuevos" element={<MontacargasSeminuevosPage />} />
                <Route path="generadora-de-engranes-seminuevos" element={<GeneradorasDeEngranesSeminuevosPage />} />
            </Route>
        </Routes>
    </HashRouter>
  )
}